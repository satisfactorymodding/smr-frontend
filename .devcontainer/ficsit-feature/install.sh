#!/usr/bin/env bash

# Install watchman
sudo apt-get update && sudo apt-get install -y watchman

# Append bashrc
echo "
alias fenv=\"source .devcontainer/env.sh\"

echo -e \"\e[1;32mWelcome to smr-frontend devcontainer\e[0m\"
echo
echo -e \"\e[31mPlease execute the following command to load the environment:\e[0m\"
echo -e \"\e[1m\$\e[0m fenv staging\"
echo
echo -e \"\e[31mTo start the dev server execute:\e[0m\"
echo -e \"\e[1m\$\e[0m bun run dev\"
echo
" >> $_REMOTE_USER_HOME/.bashrc
