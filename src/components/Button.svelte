<script>
  import Icon from "./Icon.svelte";
  let element;

  export let button;
  export let onClick;
  export let animating;
  export let index;

  let icon = button.icon;
  let url = button.url;

  $: currentlyAnimating = animating !== -1;
  $: animatingSelf = animating === index;
</script>

<div
  class={`flex flex-row w-14 h-14 justify-center transition-transform ${
    currentlyAnimating &&
    !animatingSelf &&
    "ease-in duration-300 translate-x-[60vw] md:translate-x-0 md:translate-y-[60vh]"
  }`}
  style={`transition-delay: ${index * 100}ms;`}
  bind:this={element}
>
  <a
    class={`flex h-full w-full text-primary ${animatingSelf && "hidden"}`}
    href={url}
    title={button.name}
    on:click|preventDefault={onClick(element)}
  >
    <Icon data={icon} secondary={button.secondary} />
  </a>
</div>
