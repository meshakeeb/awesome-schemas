#!/bin/bash

# Define the root directory
ROOT_DIR="./"

# Define the path for the generated root index.js file
ROOT_INDEX_FILE="$ROOT_DIR/index.js"

# Clear or create the root index.js file
> "$ROOT_INDEX_FILE"

# Loop through each subfolder in the root directory
for SUBFOLDER in $ROOT_DIR*/; do
  # Skip if it's not a directory
  if [ -d "$SUBFOLDER" ]; then
    # Get the name of the subfolder
    FOLDER_NAME=$(basename "$SUBFOLDER")

    # Append the export statement to the root index.js file
    echo "export * from './$FOLDER_NAME';" >> "$ROOT_INDEX_FILE"
  fi
done
