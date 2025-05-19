<script>
  import EditorIframe from '../components/EditorIframe.svelte';

  let inputText = "";
  let outputText = "";

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      outputText = `${inputText}: command not found`;
      inputText = "";
    } else if (e.key === "Backspace") {
      inputText = inputText.slice(0, -1);
    } else if (e.key.length === 1) {
      inputText += e.key;
    }
  }
</script>

<style>
  .blink-cursor {
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .terminal-input {
    font-family: monospace;
    white-space: pre;
  }

  .output-line {
    color: #ff5555;
    font-family: monospace;
  }
</style>

<div>
  <div class="mx-24 my-24 h-screen" on:keydown={handleKeyDown} tabindex="0">
    <h2 class="text-[100px] font-bold">hello,</h2>
    <div class="terminal-input text-[100px] font-bold">
      <span class="underline">Lorenzo Antei</span> 
      <span class="font-bold">#</span>
      <span>{inputText}</span>
      <span class="inline-block w-[0.5ch] h-[1em] bg-black blink-cursor"></span>
    </div>
    <div class="output-line text-[40px] mt-4">
      {outputText}
    </div>
  </div>

  <p>I'm a computer artist graduated from the Accademia di Belle Arti, I do bizarre live coding sessions with highly questionable Arduino-based contraptions, and moonlight as a full stack web dev and video editor when I’m not frying microcontrollers.</p>

  <button>More...</button>
  <EditorIframe />
</div>