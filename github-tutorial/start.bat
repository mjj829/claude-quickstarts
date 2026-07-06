@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo ============================================
echo   GitHub 魔法学院 - 启动检查
echo ============================================
echo.
echo 当前文件夹 / Current folder:
echo   %CD%
echo.

if not exist "start.py" (
    echo [错误] 找不到 start.py ！
    echo.
    echo 你只下载了 start.bat 这一个文件，这样不行。
    echo 必须下载整个 github-tutorial 文件夹里的所有文件：
    echo.
    echo   index.html
    echo   start.py      ^<-- 缺少这个就会报错
    echo   start.bat
    echo   app.js
    echo   i18n.js
    echo   styles.css
    echo.
    echo 正确做法：
    echo   1. 打开 https://github.com/mjj829/claude-quickstarts
    echo   2. 点绿色 Code 按钮 - Download ZIP
    echo   3. 解压后进入文件夹：
    echo      claude-quickstarts\github-tutorial\
    echo   4. 在这个文件夹里双击 start.bat
    echo.
    echo 或者最简单：直接双击 index.html 打开教程，不需要 start.bat
    echo.
    pause
    exit /b 1
)

if not exist "index.html" (
    echo [错误] 找不到 index.html ！请下载完整的 github-tutorial 文件夹。
    echo.
    pause
    exit /b 1
)

python start.py
if errorlevel 1 (
    echo.
    echo [错误] Python 运行失败。请先安装 Python：
    echo   https://www.python.org/downloads/
    echo   安装时勾选 "Add Python to PATH"
    echo.
    echo 或者不装 Python，直接双击 index.html 也能学！
    echo.
)
pause
