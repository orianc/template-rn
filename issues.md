# Current issues to solve on this branch

## React Navigation issue to pass data params to ArticleScreen

### Issue

Currently stuck on React Navigation to pass data params from [FeedScreen](src\Containers\FeedScreen\FeedScreen.tsx) to
[ArticleScreen](src\Containers\ArticleScreen\ArticleScreen.tsx). It's should be working but it's return `undefined params`.

```ts
<NewsCard
    art={art}
    onPress={() =>
        navigation.navigate({
            name: 'Article',
            params: { data: 'test' },
        })
    }
/>
```

### Expected

A config error on navigation setup may stuck.

### May Solve

We have to probably rebuild a clean navigation setup.
