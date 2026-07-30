# 新建文章脚本
# 用法: .\new-post.ps1 "文章标题"
param(
    [Parameter(Mandatory=$true, Position=0)]
    [string]$Title
)

# 脚本目录
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RootDir = Split-Path -Parent $ScriptDir
$PostsDir = Join-Path $RootDir "src\content\posts"

# 生成 slug
$Slug = $Title -replace '[^\w\u4e00-\u9fa5]', '-' -replace '-+', '-'
$Date = Get-Date -Format "yyyy-MM-dd"
$Filename = "${Date}-${Slug}.md"
$Filepath = Join-Path $PostsDir $Filename

# 检查文件是否存在
if (Test-Path $Filepath) {
    Write-Host "文件已存在: $Filepath" -ForegroundColor Yellow
    code $Filepath
    exit
}

# 生成 frontmatter
$Content = @"
---
title: ${Title}
date: ${Date}
category: 随笔
tags: []
excerpt:
---

# ${Title}

在这里开始写作...
"@

# 创建文件
$Content | Out-File -FilePath $Filepath -Encoding UTF8

Write-Host "已创建: $Filepath" -ForegroundColor Green

# 用 VS Code 打开
code $Filepath
