#!/bin/bash
set -euo pipefail

source _build_dependencies.sh

if [[ -e ~/.nvm/nvm.sh ]]; then
	source ~/.nvm/nvm.sh
	nvm install $NODE_VERSION
	nvm use $NODE_VERSION
fi
