#!/bin/bash

ENABLE_GATSBY_REFRESH_ENDPOINT=true gatsby develop -p 8001 -H 0.0.0.0 &>/dev/null & 
echo $!

# to kill: 
# ps aux | grep node
# kill -2 [id]
