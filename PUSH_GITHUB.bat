@echo off
chcp 65001 > nul
title Envoi vers GitHub - LAWTAN Connect
color 0A

echo ========================================================
echo   ENVOI DU PROTOTYPE VERS GITHUB
echo ========================================================
echo.

git remote get-url origin >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [INFO] Aucun depot distant (remote origin) n'est actuellement configure.
    echo.
    echo Pour connecter votre nouveau depot GitHub :
    echo   git remote add origin ^<URL_DE_VOTRE_NOUVEAU_REPO^>
    echo   git push -u origin main
    echo.
    pause
    exit /b
)

for /f "tokens=*" %%i in ('git remote get-url origin') do set REMOTE_URL=%%i
echo Depot cible : %REMOTE_URL%
echo.
echo Envoi en cours vers GitHub...
git push -u origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo   [SUCCES] Le code a ete pousse avec succes !
    echo   Depot : %REMOTE_URL%
    echo ========================================================
) else (
    echo ========================================================
    echo   [ATTENTION] L'envoi a echoue ou a ete annule.
    echo   Verifiez vos identifiants ou permissions.
    echo ========================================================
)

echo.
pause
