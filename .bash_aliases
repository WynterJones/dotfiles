# exa ls aliases
alias ls='exa --long --all'
alias ll='exa --tree --grid --across --recurse'
alias la='exa --tree --grid --across --recurse -I node_modules'

# Add an "alert" alias for long running commands.
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'
