/* ============================================================
   terminal.js — Interactive Terminal for index.html
   ============================================================ */

(function () {
  'use strict';

  const terminalOutput = document.getElementById('terminal-output');
  const terminalInput = document.getElementById('terminal-input');
  const terminalArea = document.getElementById('terminal-area');
  const promptPrefix = 'visitor@simhadri:~$ ';

  /* --- ASCII Art Logo -------------------------------------- */
  const asciiLogo = [
    '',
    '  ███████╗██╗███╗   ███╗██╗  ██╗ █████╗ ██████╗ ██████╗ ██╗',
    '  ██╔════╝██║████╗ ████║██║  ██║██╔══██╗██╔══██╗██╔══██╗██║',
    '  ███████╗██║██╔████╔██║███████║███████║██║  ██║██████╔╝██║',
    '  ╚════██║██║██║╚██╔╝██║██╔══██║██╔══██║██║  ██║██╔══██╗██║',
    '  ███████║██║██║ ╚═╝ ██║██║  ██║██║  ██║██████╔╝██║  ██║██║',
    '  ╚══════╝╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝',
    '',
  ];

  const bootLines = [
    { text: '', delay: 200 },
    ...asciiLogo.map((line) => ({ text: line, delay: 60, class: 'ascii-art' })),
    { text: '  Computer Vision & AI Engineer', delay: 100, class: 'accent-text' },
    { text: '', delay: 100 },
    { text: '[SYS] Initializing portfolio...', delay: 400, class: 'dim-text' },
    { text: '[SYS] Loading modules: experience, projects, skills, education, contact', delay: 600, class: 'dim-text' },
    { text: '[SYS] Establishing connection... OK', delay: 400, class: 'dim-text' },
    { text: '[SYS] All systems operational.', delay: 300, class: 'accent-text' },
    { text: '', delay: 100 },
    { text: 'Welcome! Type /help for available commands.', delay: 200, class: 'fg-text' },
    { text: '', delay: 100 },
  ];

  /* --- Bio & whoami content -------------------------------- */
  const bioText = [
    'Computer Vision & AI Engineer with research-to-product experience building',
    'end-to-end ML systems and working with GenAI agents, ranging from problem',
    'framing to deployment-ready prototypes.',
    '',
    'Shipped work across real-time video processing (detection/tracking for',
    'livestreams), multi-agent LLM decision-support systems (RAG + tool calling),',
    'and predictive modeling for industrial energy assets.',
    '',
    'Co-inventor on a pending patent for navigation and POI search.',
    'Highly experienced with modern AI coding agents and local LLM inference.',
    '',
    'Based in Stuttgart, Germany.',
  ];

  const whoamiText = [
    '  Name:    Simhadri Holagundhi',
    '  Role:    Computer Vision & AI Engineer',
    '  Tagline: Building intelligent systems from research to production',
  ];

  /* --- Help text ------------------------------------------- */
  const helpText = [
    '┌──────────────────────────────────────────────────┐',
    '│  Available Commands                              │',
    '├──────────────────────────────────────────────────┤',
    '│  /about       — About me                        │',
    '│  /whoami      — Name, role, tagline              │',
    '│  /experience  — Professional experience          │',
    '│  /projects    — Projects & work                  │',
    '│  /skills      — Technical skills                 │',
    '│  /education   — Education background             │',
    '│  /contact     — Contact information              │',
    '│  /help        — Show this help message           │',
    '│  /clear       — Clear the terminal               │',
    '└──────────────────────────────────────────────────┘',
  ];

  /* --- Utility: create output line ------------------------- */
  function createLine(text, className) {
    const line = document.createElement('div');
    line.classList.add('terminal-line');
    if (className) line.classList.add(className);
    line.textContent = text;
    return line;
  }

  function appendLine(text, className) {
    const line = createLine(text, className);
    terminalOutput.appendChild(line);
    scrollToBottom();
  }

  function appendPromptLine(command) {
    const line = document.createElement('div');
    line.classList.add('terminal-line', 'prompt-echo');
    const prompt = document.createElement('span');
    prompt.classList.add('prompt-prefix');
    prompt.textContent = promptPrefix;
    const cmd = document.createElement('span');
    cmd.classList.add('prompt-command');
    cmd.textContent = command;
    line.appendChild(prompt);
    line.appendChild(cmd);
    terminalOutput.appendChild(line);
    scrollToBottom();
  }

  function scrollToBottom() {
    terminalArea.scrollTop = terminalArea.scrollHeight;
  }

  /* --- Boot Sequence --------------------------------------- */
  let bootComplete = false;

  function runBootSequence() {
    let i = 0;

    function nextLine() {
      if (i >= bootLines.length) {
        bootComplete = true;
        showPrompt();
        return;
      }

      const { text, delay, class: cls } = bootLines[i];
      appendLine(text, cls);
      i++;
      setTimeout(nextLine, delay);
    }

    nextLine();
  }

  /* --- Prompt ---------------------------------------------- */
  function showPrompt() {
    const promptLine = document.getElementById('prompt-line');
    if (promptLine) {
      promptLine.style.display = 'flex';
      terminalInput.focus();
    }
  }

  /* --- Command Router -------------------------------------- */
  const commandData = {
    '/experience': {
      summary: [
        'Experience across AI Engineering and Research, with roles at 21Minds GmbH and Fraunhofer IAO.',
        'Focused on shipping GenAI systems (RAG, agent orchestration), applying Computer Vision',
        '(RF-DETR, WebRTC tracking), and developing proactive AI interfaces from research to deployment.'
      ],
      url: 'experience.html',
      linkText: 'Explore my work experience →'
    },
    '/projects': {
      summary: [
        'A selection of academic and professional projects including:',
        '- Deep Learning Risk Assessment for robotic manipulators (GNNs, PyTorch)',
        '- Appearance-based Gaze Estimation (GANs, OpenCV)'
      ],
      url: 'projects.html',
      linkText: 'View my projects →'
    },
    '/skills': {
      summary: [
        'Core proficiencies:',
        '- Languages (Python, C#, C++), AI/ML (PyTorch, LangChain, HuggingFace),',
        '- Computer Vision (OpenCV, FFmpeg, WebRTC), and AI Agents (Cursor, Claude Code, Ollama).',
        '- Also experienced with MLOps and Cloud stacks like Docker and Azure.'
      ],
      url: 'skills.html',
      linkText: 'See my complete skills list →'
    },
    '/education': {
      summary: [
        '[ M.Sc. Information Technology ] - University of Stuttgart, Germany',
        'Focus: Machine/Deep Learning, Pattern Recognition, and Computer Vision.',
        '',
        '[ B.Eng. Electronics & Communication ] - Dayananda Sagar College of Engineering'
      ],
      url: 'education.html',
      linkText: 'View my full academic background →'
    },
    '/contact': {
      summary: [
        'Email: simhadri1998@gmail.com',
        '',
        'Feel free to reach out for opportunities, collaborations, or just to talk tech.'
      ],
      url: 'contact.html',
      linkText: 'Check out my contact page for more links (LinkedIn, GitHub) →'
    }
  };

  function handleCommand(input) {
    const command = input.trim().toLowerCase();
    if (!command) return;

    appendPromptLine(command);

    if (command === '/help') {
      helpText.forEach((line) => appendLine(line, 'help-text'));
    } else if (command === '/clear') {
      terminalOutput.innerHTML = '';
    } else if (command === '/about') {
      bioText.forEach((line) => appendLine(line, 'bio-text'));
    } else if (command === '/whoami') {
      whoamiText.forEach((line) => appendLine(line, 'accent-text'));
    } else if (commandData[command]) {
      const data = commandData[command];
      data.summary.forEach((line) => appendLine(line, 'bio-text'));

      const linkLine = document.createElement('div');
      linkLine.classList.add('terminal-line');
      linkLine.innerHTML = `<a href="${data.url}" class="accent-text" style="text-decoration: underline; margin-top: 5px; display: inline-block; cursor: pointer;">[ ${data.linkText} ]</a>`;
      terminalOutput.appendChild(linkLine);
      scrollToBottom();
    } else {
      appendLine(`command not found: ${command}. Type /help for available commands.`, 'error-text');
    }

    appendLine('', '');
  }

  /* --- Input Handling -------------------------------------- */
  if (terminalInput) {
    terminalInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        const value = this.value;
        this.value = '';
        this.style.width = '1ch';
        handleCommand(value);
      }
    });

    // Dynamically resize input to match content so cursor stays adjacent
    terminalInput.addEventListener('input', function () {
      var len = this.value.length;
      this.style.width = (len > 0 ? len + 1 : 1) + 'ch';
    });
  }

  /* --- Focus management ------------------------------------ */
  if (terminalArea) {
    terminalArea.addEventListener('click', () => {
      if (bootComplete && terminalInput) {
        terminalInput.focus();
      }
    });
  }

  /* --- Nav button terminal echo ---------------------------- */
  const navButtons = document.querySelectorAll('.terminal-nav-btn');
  navButtons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const command = this.dataset.command;
      const href = this.getAttribute('href');
      if (command) {
        appendPromptLine(command);
        appendLine(`Navigating to ${command.slice(1)}...`, 'accent-text');
      }
      sessionStorage.setItem('navigated', 'true');
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });

  /* --- Start ----------------------------------------------- */
  runBootSequence();
})();
