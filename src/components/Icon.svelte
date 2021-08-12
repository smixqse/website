<script>
  export let data;
  export let secondary;
</script>

<div class="relative w-14 h-14">
  <svg
    version="1.1"
    class="text-primary w-14 h-14"
    role="presentation"
    fill="currentColor"
    viewBox={`0 0 ${data.icon[0]} ${data.icon[1]}`}
  >
    <path key="path-0" d={data.icon[4]} />
  </svg>
  {#if secondary}
    <div class="rounded-full w-5 h-5 bg-primary bottom-0 right-0 absolute">
      <span
        class="flex justify-center items-center text-background h-full font-bold text-sm"
        >2</span
      >
    </div>
  {/if}
</div>
