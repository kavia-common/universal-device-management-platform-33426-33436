#!/bin/bash
cd /home/kavia/workspace/code-generation/universal-device-management-platform-33426-33436/customizable_frontend_app
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

