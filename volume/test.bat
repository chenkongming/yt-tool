@echo off
ffmpeg -i 本夫妇投资5000万为孩子建造游乐场之家_佛祖会原谅他们嘛_.mp4 -vcodec copy -af "volume=-20dB" 本夫妇投资5000万为孩子建造游乐场之家_佛祖会原谅他们嘛_out.mp4

@echo off
set name=病患的家如何改造_完全无障碍_日本一级建筑师神作案例_.mp4
set out=_out
set "result="%name%%out%"
ffmpeg -i  %name% -vcodec copy -af "volume=-20dB" %result%

pause


