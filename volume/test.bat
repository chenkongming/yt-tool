@echo off
ffmpeg -i ����Ͷ��5000��Ϊ���ӽ������ֳ�֮��_�����ԭ��������_.mp4 -vcodec copy -af "volume=-20dB" ����Ͷ��5000��Ϊ���ӽ������ֳ�֮��_�����ԭ��������_out.mp4

@echo off
set name=�����ļ���θ���_��ȫ���ϰ�_�ձ�һ������ʦ��������_.mp4
set out=_out
set "result="%name%%out%"
ffmpeg -i  %name% -vcodec copy -af "volume=-20dB" %result%

pause


