<script>
  import Button from "./Button.svelte";
  import FixedIcon from "./FixedIcon.svelte";
  export let buttons;
  let animating = -1;
  let rect = { x: 0, y: 0 };
  let showButtons = true;

  function onClick(button, index, element) {
    animating = index;
    let initialRect = element.getBoundingClientRect();
    initialRect.button = button;
    initialRect.middle = index === Math.floor(buttons.length / 2);
    initialRect.isRight = index < Math.floor(buttons.length / 2);
    rect = initialRect;

    setTimeout(() => {
      showButtons = false;
    }, 1200);
    setTimeout(() => {
      location.href = button.url;
    }, 2000);
    document.title = button.name;
    setInterval(() => {
      document.title = document.title + ".";
    }, 500);
  }
</script>

<main class="relative w-full h-full">
  <div
    class="flex justify-center items-center w-full h-full z-10 overflow-hidden"
  >
    <div class="relative h-auto flex flex-col sm:flex-row gap-9">
      {#if showButtons}
        {#each buttons as button, i}
          <Button
            {button}
            onClick={(element) => onClick(button, i, element)}
            {animating}
            index={i}
          />
        {/each}
      {/if}
    </div>
  </div>
  {#if rect.x !== 0}
    <FixedIcon
      button={rect.button}
      {rect}
      middle={rect.middle}
      isRight={rect.isRight}
    />
  {/if}
  {#if animating !== -1}
    <div class="flex items-center justify-center">
      <div class="fixed z-0 pointer-events-none top-full animate-backanim">
        <div
          class="w-full h-full text-white opacity-20 font-sans font-semibold tracking-widest leading-5"
        >
          {#each Array(25) as _, i}
            <span class="text-[4rem] leading-none block">smixqse</span>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</main>
