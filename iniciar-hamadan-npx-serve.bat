@echo off
title Iniciando sistema Hamadan com npx serve...

:: Inicia o servidor backend em nova aba
echo Iniciando backend...
start /min cmd /k "cd backend && npm start"

:: Aguarda 3 segundos
timeout /t 3 /nobreak >nul

:: Inicia o servidor frontend com npx serve em nova aba
echo Iniciando frontend com npx serve...
start /min cmd /k "npx serve . -l 8080 --single"

:: Aguarda 2 segundos
timeout /t 2 /nobreak >nul

:: Abre navegador na tela de login
echo Abrindo navegador...
start http://localhost:8080

exit