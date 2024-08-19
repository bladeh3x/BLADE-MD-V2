#!/bin/bash

echo "FastCoderBot: Fixing common render errors..."

# Check if the project is using React
if [ -f "package.json" ] && grep -q "react" "package.json"; then
    echo "React project detected. Applying fixes..."

    # Clear cache and reinstall dependencies
    echo "Clearing npm cache and reinstalling dependencies..."
    npm cache clean --force
    rm -rf node_modules package-lock.json
    npm install

    # Check for and fix potential syntax errors
    echo "Checking for syntax errors..."
    npm run lint -- --fix

    # Ensure all necessary dependencies are installed
    echo "Installing common rendering dependencies..."
    npm install react react-dom @babel/core @babel/preset-env @babel/preset-react

    # Update Babel configuration
    echo "Updating Babel configuration..."
    echo '{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}' > .babelrc

    # Check for and fix potential routing issues
    echo "Checking for routing issues..."
    if grep -q "react-router-dom" "package.json"; then
        npm install react-router-dom@latest
    fi

    # Clear browser cache (instructions for user)
    echo "Please clear your browser cache to ensure all changes take effect."

else
    echo "This doesn't appear to be a React project. Please make sure you're in the correct directory."
fi

echo "FastCoderBot: Render error fixes applied. Please restart your development server and test the application."
