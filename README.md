# Hexo-thme-nebula
Nebula is a simple, dark and easy-to-use [Hexo](https://hexo.io/) theme.

[Preview](https://suolawangzai.github.io/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

There is no extra plugins you need to install beforehand. Just follow the [Hexo installation](https://hexo.io/docs/) on its official website and you're good to go.

### Installing

In your Hexo folder run command:

```
$ git clone https://github.com/Suolawangzai/hexo-theme-nebula.git themes/nebula
```

Then, change your `theme` setting in `_config.yml` in your Hexo folder to `nebula`.
Don't forget to specify the language in `language` in the same `_config.yml` file. Fill in `default` for English. Currently, nebula support French, Japenese, Russian, Chinese(traditional/simplified), Norwegian and Dutch.

```

language: default

...


theme: nebula

```

### Configuration

Default config:
```
# Header
menu:
  Home: /
  Archives: /archives
rss: /atom.xml

# Content
excerpt_link: Read More

# Social (fill in your social account here so people can follow you :))
disqus_shortname:
share_enabled: true
twitter:
instagram:
pinterest:
github:
google_plus:
fb_app_id:

# Miscellaneous
google_analytics:
favicon: /favicon/favicon.ico

```

- **menu** - Navigation menu, you can add path to page you created here if you want it to show on navigation bar at the top
- **rss** - RSS link
- **excerpt_link** - "Read More" link at the bottom of excerpted articles. `false` to hide the link.
- **share_enabled** - `true` to enable sharing your blogs to shocial media: i.e. twitter , facebook, pinterest, google+
- **disqus_shortname** - fill in disqus shortname here, so people can comment on your blogs
- **twitter** - Twiiter ID
- **instagram** - Instagram ID
- **pinterest** - pinterest ID
- **github** - github ID
- **google_plus** - Google+ ID
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path
