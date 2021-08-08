<script>
  import Icon from "./Icon.svelte";
  let element;

  export let icon;
  export let url;
  export let onClick;
  export let animating;
  export let index;
  export let blank;
  export let disabled;
</script>

<div
  class={`flex flex-row w-16 h-16 justify-center transition-transform ${
    animating !== -1 &&
    (animating === index
      ? `transform opacity-0 scale-150 ease-out duration-500`
      : "ease-in duration-300 md:translate-y-[60vh]")
  }`}
  style={`transition-delay: ${animating === index ? 75 : index * 100}ms;`}
  bind:this={element}
>
  <a
    class={`flex h-full w-full text-white ${blank && "hidden"} ${
      disabled && "pointer-events-none cursor-default"
    }`}
    href={url}
    on:click|preventDefault={onClick(element)}
  >
    <Icon svgClass="text-white" data={icon} />
  </a>
</div>
