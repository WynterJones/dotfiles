# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"
CASE_SENSITIVE="true"
HYPHEN_INSENSITIVE="true"
ENABLE_CORRECTION="true"
COMPLETION_WAITING_DOTS="true"
plugins=(git zsh-autosuggestions rbenv ruby rake dotenv)

source $ZSH/oh-my-zsh.sh

### Fix slowness of pastes with zsh-syntax-highlighting.zsh
pasteinit() {
  OLD_SELF_INSERT=${${(s.:.)widgets[self-insert]}[2,3]}
  zle -N self-insert url-quote-magic # I wonder if you'd need `.url-quote-magic`?
}

pastefinish() {
  zle -N self-insert $OLD_SELF_INSERT
}
zstyle :bracketed-paste-magic paste-init pasteinit
zstyle :bracketed-paste-magic paste-finish pastefinish
### Fix slowness of pastes

# Auto-complete
source /home/wynter/.zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# Clear commands
preexec () {
 printf "\033c"
 echo "$fg_bold[red]╭╼$fg[blue] $PWD\n$fg_bold[red]╰───╼$fg_bold[green] $ $history[$HISTCMD] $fg_bold[red]\n"
}
preexec_invoke_exec () {
    [ -n "$COMP_LINE" ] && return                     # do nothing if completing
    [ "$BASH_COMMAND" = "$PROMPT_COMMAND" ] && return # don't cause a preexec for $PROMPT_COMMAND
    local this_command=`history 1 | sed -e "s/^[ ]*[0-9]*[ ]*//g"`; # obtain the command from the history, removing the history number at the beginning
    preexec "$this_command"
}
trap 'preexec_invoke_exec' DEBUG 

### Aliases

# exa ls aliases
alias ls='exa --long --all'
alias ll='exa --tree --grid --across --recurse'
alias la='exa --tree --grid --across --recurse -I node_modules'
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

NEWLINE=$'\n'
PROMPT='%{$fg[black]%}${NEWLINE}╭╼ %{$fg[green]%}%~ %{$fg_bold[blue]%}$(git_prompt_info)%{$reset_color%}${NEWLINE}%{$fg[black]%}╰──╼ %{$reset_color%}'

ZSH_THEME_GIT_PROMPT_PREFIX="["
ZSH_THEME_GIT_PROMPT_SUFFIX="]"
ZSH_THEME_GIT_PROMPT_DIRTY=" ✗"
ZSH_THEME_GIT_PROMPT_CLEAN=" ✔"
eval "$(starship init zsh)"
