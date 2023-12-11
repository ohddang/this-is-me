const ownerCommand = "GonGon's>"

const pre_command = document.getElementById("pre_command");
const input_command = document.getElementById("input_command");
const page_list = document.getElementById("page_list");

const axios = require('axios');
const owner = 'ohddang';
const repo = 'this-is-blog';
const path = '/pages';

const accessToken = "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";

// 특정 경로 설정
const rootPath = "../pages";

let pages_map = new Map();

function on_key_press(event){
  console.log(event)

  if(event.keyCode == 13){
    pre_command.textContent += ownerCommand + input_command.value + "" + "\r\n";
    input_command.value = "";
  }
}

async function getMarkdownFiles() {
  try {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    const markdownFiles = response.data.filter(file => file.name.endsWith('.md'));

    console.log('Markdown Files:');
    markdownFiles.forEach(file => console.log(file.name));
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error.message);
  }
}


// window.addEventListener('DOMContentLoaded', 
// // 시작 디렉토리에서 탐색 시작
// function(){});

getMarkdownFiles();