<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { cur_role, cur_role_type, roles } from '$lib/stores/role';
  import type { AfterNavigate } from '@sveltejs/kit';

  // TODO: close for unauthneticated

  afterNavigate(({ to }: AfterNavigate) => {
    const slug = to?.params?.slug ?? '';
    if ($roles[slug] !== undefined) {
      $cur_role = slug;
      $cur_role_type = $roles[slug].role_type;
      console.log({
        slug: to?.params?.slug ?? '',
        cur_role: $cur_role,
        cur_role_type: $cur_role_type,
      });
    }
  });
</script>
