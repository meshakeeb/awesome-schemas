#!/bin/bash

# Define the root directory to start the loop
ROOT_DIR="./"

# Loop through each subfolder in the root directory
for SUBFOLDER in $ROOT_DIR*/; do
  # Skip if it's not a directory
  if [ -d "$SUBFOLDER" ]; then
    # Initialize an empty index.js file inside the subfolder
    INDEX_FILE="$SUBFOLDER/index.js"
    > "$INDEX_FILE"  # Clear the contents of index.js if it already exists

    # Loop through each JavaScript file in the subfolder, excluding index.js
    for JS_FILE in $SUBFOLDER*.js; do
      # Skip the index.js file
      if [[ "$(basename "$JS_FILE")" != "index.js" ]]; then
        # Extract the filename without the extension
        FILENAME=$(basename "$JS_FILE" .js)

        # Generate the export line and append to the index.js
        echo "export { default as $FILENAME } from './$FILENAME';" >> "$INDEX_FILE"
      fi
    done
  fi
done
