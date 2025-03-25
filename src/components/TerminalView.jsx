import { useState, useRef, useEffect } from "react";
import { fileSystem, fileContents } from "../data/filesystem";


const TerminalView = () => {
  const [history, setHistory] = useState([
    { command: "", output: "Welcome to Aayush's Terminal Portfolio!\nType 'help' to see the list of available commands." }
  ]);
  const [input, setInput] = useState("");
  const [currentPath, setCurrentPath] = useState("~");
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      processCommand(input.trim());
      setInput("");
    }
  };

  const processCommand = (cmd) => {
    if (!cmd) return;

    let output;
    const parts = cmd.split(" ");
    const command = parts[0];
    const argument = parts.slice(1).join(" ");
    let newPath = currentPath;

    switch (command) {
      case "whoami":
        output = "I'm Aayush Kumar, a first-year CS student at VIT Vellore.";
        break;

      case "ls":
        output = fileSystem[currentPath.replace("~/", "")]?.map(item => (
          <span key={item} className="text-green-400">{item} </span>
        )) || "No such directory";
        break;

      case "cd":
        if (!argument) {
          output = "cd: missing argument";
        } else if (argument === "..") {
          const pathParts = currentPath.split("/");
          pathParts.pop();
          newPath = pathParts.length ? pathParts.join("/") : "~";
        } else if (fileSystem[currentPath]?.includes(argument)) {
          newPath = `${currentPath}/${argument}`;
        } else {
          output = `cd: ${argument}: No such file or directory`;
        }
        break;

      case "cat":
        if (!argument) {
          output = "cat: missing filename";
        } else {
          const fullPath = `${currentPath}/${argument}`.replace("~/", "");
          output = fileContents[fullPath]
            ? fileContents[fullPath].split("\n").map((line, i) => <p key={i}>{line}</p>)
            : `cat: ${argument}: No such file`;
        }
        break;
        
      case "sudo":
        output = "You think sudo will work here? That's cute. 🤣";
        break;

      case "rm":
        output = "rm: cannot remove this file/folder: Permission denied";
        break;

      case "echo":
        output = argument;
        break;

      case "pwd":
        output = `/home/aayush${currentPath.replace("~", "")}`;
        break;

      case "clear":
        setHistory([{ command: "", output: "Welcome to Aayush's Terminal Portfolio!\nType 'help' to see the list of available commands." }]);
        return;

      case "uname":
        output = `Linux aayush-portfolio 6.13.6-arch1-1 #1 SMP PREEMPT_DYNAMIC ${new Date().toUTCString()} x86_64 GNU/Linux`;
        break;

      case "help":
        const commands = {
          whoami: "Displays information about me.",
          ls: "Lists contents of the current directory.",
          cd: "Changes the current directory.",
          cat: "Displays the contents of a file.",
          pwd: "Shows the current directory path.",
          echo: "Prints the given text.",
          sudo: "Attempts to run a command with superuser privileges.",
          rm: "Deletes a file/folder.",
          clear: "Clears the terminal screen.",
          exit: "Exits the terminal."
        };
        output = Object.entries(commands)
          .map(([cmd, desc]) => `- ${cmd}: ${desc}`)
          .join("\n");
        break;

      case "exit":
        window.location.reload();
        return;

      default:
        output = `bash: ${cmd}: command not found`;
    }

    setHistory(prev => [...prev, { command: cmd, output, path: currentPath }]);
    setCurrentPath(newPath);
  };

  return (
    <div className="p-6 font-mono text-gray-300 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full bg-gray-900 border border-gray-700 rounded-lg shadow-lg">

        <div className="flex items-center bg-gray-800 px-4 py-2 rounded-t-lg">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 text-gray-400 text-sm">
            aayush@portfolio:<span className="text-green-400">{currentPath}</span>$
          </span>
        </div>

        <div ref={terminalRef} className="p-4 text-left font-mono text-gray-300 overflow-y-auto h-[400px]">
          {history.map((entry, index) => (
            <div key={index} className="mb-2">
              {entry.command && (
                <p className="text-indigo-400">
                  aayush@portfolio:<span className="text-green-400">{entry.path || "~"}</span>$ {entry.command}
                </p>
              )}
              <p className="whitespace-pre-line">{entry.output}</p>
            </div>
          ))}

          <div className="flex items-center">
            <span className="text-indigo-400">
              aayush@portfolio:<span className="text-green-400">{currentPath}</span>$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent text-white ml-2 outline-none flex-1"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalView;
