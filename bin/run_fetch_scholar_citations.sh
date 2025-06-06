#!/bin/bash

# Activate the correct Python environment
# This assumes you're using conda/miniforge with tf_env
# Modify this path as needed for your specific environment setup
CONDA_BASE=$(conda info --base)
source $CONDA_BASE/etc/profile.d/conda.sh
conda activate tf_env

# Run the Python script with all arguments passed to this wrapper
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
python "$SCRIPT_DIR/fetch_scholar_citations.py" "$@"