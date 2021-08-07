<script>
  import Icon from "./Icon.svelte";

  export let icon;
  export let url;
  export let onClick;
  export let animating;
  export let index;
</script>

<div
  class={`flex flex-row w-16 justify-center transition-all ${
    animating !== -1 &&
    (animating === index
      ? "transform scale-150 ease-out duration-500"
      : "ease-in duration-300 md:translate-y-[60vh]")
  }`}
  style={`transition-delay: ${animating === index ? 75 : index * 100}ms`}
>
  <a
    class="flex h-full w-full text-white"
    href={url}
    on:click|preventDefault={onClick}
  >
    <Icon class="text-white !w-full h-full" data={icon} />
  </a>
</div>
