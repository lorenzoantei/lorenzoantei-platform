<script lang="ts">
    import { posts } from '$lib/posts';
</script>

<section class="max-w-3xl mx-auto py-12 px-4">
    <h1 class="text-4xl font-bold mb-8">Blog</h1>
    <ul class="space-y-6">
        {#each posts as post}
            <li class="p-4 border border-gray-300 rounded-xl hover:shadow-md transition">
                <a href={`/blog/${post.slug}`} class="block">
                    <h2 class="text-2xl font-semibold text-blue-600 hover:underline">
                    {post.title}
                    </h2>
                    <p class="text-sm text-gray-500">{post.date}</p>
                    <p class="mt-2 text-gray-700">{post.excerpt}</p>
                </a>
            </li>
        {/each}
    </ul>
</section>
