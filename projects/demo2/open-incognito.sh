#!/bin/bash
# Script para abrir Chrome en modo incógnito con la URL del servidor de desarrollo

# Espera 2 segundos para que Vite inicie
sleep 2

# Abre Chrome en modo incógnito
google-chrome --incognito http://localhost:5173 &
