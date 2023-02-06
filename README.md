# Hugo Utterances Comments Engine Module

[![Used By](https://img.shields.io/badge/dynamic/json?color=success&label=used+by&query=repositories_humanize&logo=hugo&style=flat-square&url=https://api.razonyang.com/v1/github/dependents/razonyang/hugo-mod-utterances)](https://github.com/razonyang/hugo-mod-utterances/network/dependents)
![Hugo Requirements](https://img.shields.io/badge/dynamic/json?color=important&label=requirements&query=requirements&logo=hugo&style=flat-square&url=https://api.razonyang.com/v1/hugo/modules/github.com/razonyang/hugo-mod-utterances)
[![License](https://img.shields.io/github/license/razonyang/hugo-mod-utterances?style=flat-square)](https://github.com/razonyang/hugo-mod-utterances/blob/main/LICENSE)
[![Version](https://img.shields.io/github/v/tag/razonyang/hugo-mod-utterances?label=version&style=flat-square)](https://github.com/razonyang/hugo-mod-utterances/tags)

This module add [Utterances](https://utteranc.es/) comments engine support for Hugo.

## Features

- Flexible and Configurable.
- JS APIs: change theme on the fly, it's usually used in the case of color(dark/light) changed.

## Installation

> Requires extended Hugo and Go.

Append the `github.com/razonyang/hugo-mod-utterances` to the `module.imports`.

```toml
[[module.imports]]
path = "github.com/razonyang/hugo-mod-utterances"
```

## Site Parameters

| Name | Type | Requried | Default | Description
|---|:-:|:-:|:-:|---
| `utterances` | Object | | |
| `utterances.endpoint` | String | Y | `https://utteranc.es/` | The client script endpoint.
| `utterances.repo` | String | Y | - | The GitHub repository, `user/repo`.
| `utterances.mapping` | String | N | `pathname` | The mapping between blog posts and GitHub issues. Available options: `pathname`, `url`, `title`, `og:title`.
| `utterances.theme` | String | N | `preferred-color-scheme` | Available options: `github-light`, `github-dark`, `github-dark-orange`, `icy-dark`, `dark-blue`, `photon-dark`, `preferred-color-scheme`, `boxy-light`, `gruvbox-dark`.
| `utterances.label` | String | N | `comments` | The label that will be assigned to issues created by Utterances.

> See the [configuration](config.yml) for details.

## Usage

> See the [example site](https://projects.razonyang.com/hugo-mod-utterances/) and it's [source code](exampleSite).

### Configuration

Firstly, we'll need to tweak the [site parameters](#site-parameters) listed above.

### Import Script

Then place the following partial to your template where you want the comments to appear.

```go
{{ partial "utterances/script" . }}
```

Or specify another options than `.Site.Params.utterances`, it's used to specify multiple Utterances configurations.

> The global options will be merged into the custom options.

```go
{{ partial "utterances/script-with-options" .Site.Params.blog.utterances }}
```

## JS APIs

You may want to change the Utterances theme on the fly, a common example is changing the Utterances to the corresponding theme when the user switches colors(dark/light).

```js
import Utterances from 'utterances/js';

const utterances = new Utterances();
utterances.setTheme('github-dark');
```

You can find the real example on the [example site](exampleSite).
