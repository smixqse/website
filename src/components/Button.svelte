<script>
  import Icon from "./Icon.svelte";
  let element;

  export let icon;
  export let url;
  export let onClick;
  export let animating;
  export let index;

  $: currentlyAnimating = animating !== -1;
  $: animatingSelf = animating === index;
</script>

<div
  class={`flex flex-row w-16 h-16 justify-center transition-transform ${
    currentlyAnimating &&
    !animatingSelf &&
    "ease-in duration-300 translate-x-[60vw] md:translate-x-0 md:translate-y-[60vh]"
  }`}
  style={`transition-delay: ${index * 100}ms;`}
  bind:this={element}
>
  <a
    class={`flex h-full w-full text-white ${animatingSelf && "hidden"}`}
    href={url}
    on:click|preventDefault={onClick(element)}
  >
    <Icon svgClass="text-white w-full h-full" data={icon} />
  </a>
</div>
