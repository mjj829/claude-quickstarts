#!/usr/bin/env python3
"""Start the tutorial server and auto-generate phone-ready links — no IP hunting needed."""

from __future__ import annotations

import os
import socket
import sys
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

PORT = int(os.environ.get("PORT", "8080"))
ROOT = Path(__file__).resolve().parent


def get_local_ip() -> str:
    """Find this computer's WiFi/LAN address automatically."""
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as sock:
            sock.connect(("8.8.8.8", 80))
            return sock.getsockname()[0]
    except OSError:
        pass

    try:
        return socket.gethostbyname(socket.gethostname())
    except OSError:
        return "127.0.0.1"


def write_link_page(ip: str) -> Path:
    phone_url = f"http://{ip}:{PORT}/"
    pc_url = f"http://localhost:{PORT}/"
    qr = f"https://api.qrserver.com/v1/create-qr-code/?size=260x260&data={phone_url}"

    html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>打开 GitHub 教程 / Open Tutorial</title>
  <style>
    * {{ box-sizing: border-box; }}
    body {{
      font-family: "PingFang SC", "Noto Sans SC", system-ui, sans-serif;
      margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #f0f4ff, #fff5f7);
      padding: 1.5rem;
    }}
    .card {{
      background: white; border-radius: 24px; padding: 2rem; max-width: 420px; width: 100%;
      box-shadow: 0 12px 40px rgba(108,99,255,.2); text-align: center;
      border: 3px solid #6c63ff;
    }}
    h1 {{ font-size: 1.4rem; color: #6c63ff; margin: 0 0 .5rem; }}
    p {{ color: #636e72; line-height: 1.6; margin: .5rem 0; }}
    .link {{
      display: block; background: linear-gradient(135deg,#6c63ff,#5248e0);
      color: white; text-decoration: none; padding: 1rem 1.25rem; border-radius: 999px;
      font-weight: 800; font-size: 1.05rem; margin: 1rem 0; word-break: break-all;
    }}
    .link.secondary {{ background: white; color: #6c63ff; border: 2px solid #dfe6e9; font-size: .95rem; }}
    img {{ border-radius: 12px; margin: .75rem 0; }}
    .tip {{ background: #f0fff4; border-radius: 12px; padding: .85rem; font-size: .85rem; text-align: left; }}
    code {{ background: #2d3436; color: #55efc4; padding: .1rem .35rem; border-radius: 4px; }}
  </style>
</head>
<body>
  <div class="card">
    <h1>📱 手机点这里 / Tap on phone</h1>
    <p>电脑和手机连<strong>同一个 WiFi</strong>，手机扫二维码或点下面按钮：</p>
    <img src="{qr}" width="260" height="260" alt="QR code" />
    <a class="link" href="{phone_url}">{phone_url}</a>
    <p>💻 电脑本机打开：</p>
    <a class="link secondary" href="{pc_url}">{pc_url}</a>
    <div class="tip">
      <strong>不用自己找 IP！</strong> 这个页面是脚本自动生成的。<br />
      如果手机打不开，把 <code>github-tutorial</code> 文件夹发到手机，直接打开 <code>index.html</code> 也行。
    </div>
  </div>
</body>
</html>"""

    out = ROOT / "open-on-phone.html"
    out.write_text(html, encoding="utf-8")

    (ROOT / "YOUR-PHONE-LINK.txt").write_text(
        f"Phone (same WiFi): {phone_url}\nComputer:           {pc_url}\n",
        encoding="utf-8",
    )
    return out


def main() -> None:
    os.chdir(ROOT)
    ip = get_local_ip()
    link_page = write_link_page(ip)

    phone_url = f"http://{ip}:{PORT}/"
    pc_url = f"http://localhost:{PORT}/"
    link_file_url = f"http://localhost:{PORT}/open-on-phone.html"

    print()
    print("=" * 56)
    print("  🐙 GitHub 魔法学院 — 链接已自动生成！")
    print("  🐙 GitHub Magic Academy — Links ready!")
    print("=" * 56)
    print()
    print(f"  💻 电脑打开 / On computer:")
    print(f"     {pc_url}")
    print()
    print(f"  📱 手机打开 / On phone (same WiFi):")
    print(f"     {phone_url}")
    print()
    print(f"  📋 链接页（含二维码）/ Link page with QR code:")
    print(f"     {link_file_url}")
    print()
    print(f"  📄 也写入了 / Also saved to:")
    print(f"     {link_page}")
    print(f"     {ROOT / 'YOUR-PHONE-LINK.txt'}")
    print()
    print("  保持此窗口打开。按 Ctrl+C 停止。")
    print("  Keep this window open. Press Ctrl+C to stop.")
    print("=" * 56)
    print()

    try:
        webbrowser.open(link_file_url)
    except Exception:
        pass

    handler = SimpleHTTPRequestHandler
    with ThreadingHTTPServer(("0.0.0.0", PORT), handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")
            sys.exit(0)


if __name__ == "__main__":
    main()
