---
layout: post
title: "Running Jekyll Site Locally"
date: 2026-04-21
description: "Want to test your GitHub Pages site locally before pushing changes? Complete setup guide to run your site smoothly on localhost."
---

## 🎯 The Goal

If you’re using GitHub Pages for your blogs, your site is likely powered by Jekyll. While pushing changes directly to GitHub works, it’s slow and risky—you don’t want to commit blindly and hope everything renders correctly.

**The goal is simple:** Run your Jekyll-based GitHub Pages site locally so you can preview changes instantly before deploying.

## 🧭 The Workflow

Running a Jekyll-based GitHub Pages site locally is pretty straightforward once you set up the environment.

### 1. Install prerequisites

You’ll need:
* Ruby (Jekyll runs on it)
* RubyGems
* Bundler

On macOS/Linux, Ruby is often preinstalled. On Windows, you may need something like RubyInstaller.

<div style="border: 2px solid #ff4c4c; padding: 15px; margin-bottom: 20px; border-radius: 5px; background-color: rgba(255, 76, 76, 0.1);" markdown="1">
#### Pitfall - 1

The system might still be using macOS’s default `Ruby 2.6`. `Ruby 2.6` is deprecated and no longer supported by Jekyll or modern Ruby gems. 
</div>

<div style="border: 2px solid #4CAF50; padding: 15px; margin-bottom: 20px; border-radius: 5px; background-color: rgba(76, 175, 80, 0.1);" markdown="1">
#### Solution

We need a newer version of Ruby (like 3.2+).

On macOS, the best way is to use **Homebrew**:
Install a modern Ruby using Homebrew and rbenv:
```bash
brew install rbenv ruby-build
```
(Make sure to follow any instructions rbenv gives you about adding it to your shell configuration).

```bash
rbenv install 3.2.2
rbenv global 3.2.2
```
</div>

---

<div style="border: 2px solid #ff4c4c; padding: 15px; margin-bottom: 20px; border-radius: 5px; background-color: rgba(255, 76, 76, 0.1);" markdown="1">
#### Pitfall - 2

```bash
gem install bundler jekyll
> ERROR: While executing gem ... (Gem::FilePermissionError)
> You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory.
```

It installs gems into a protected directory:
```
/Library/Ruby/Gems/2.6.0
```
</div>

<div style="border: 2px solid #4CAF50; padding: 15px; margin-bottom: 20px; border-radius: 5px; background-color: rgba(76, 175, 80, 0.1);" markdown="1">
#### Solution

1. Verify which Ruby is active

    Run:

    ```bash
    which ruby
    ruby -v
    ```

    If you see something like:

    ```bash
    /usr/bin/ruby
    ```
    then rbenv isn’t hooked into your shell.

2. Initialize rbenv properly

    Add this to your shell config:

    If you use zsh (default on macOS):

    ```bash
    echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
    ```

    Then reload:

    ```bash
    source ~/.zshrc
    ```

3. Set and rehash Ruby

    ```bash
    rbenv global 3.2.2
    rbenv rehash
    ```

    Check again:

    ```bash
    ruby -v
    which ruby
    ```

    Now it should point to something like:

    ```bash
    ~/.rbenv/shims/ruby
    ```
</div>


### 2. Install Jekyll and Bundler

Run:

```bash
gem install jekyll bundler
```

---

### 3. Go to your project folder

```bash
cd your-github-io-repo
```

### 4. Install dependencies

If your project has a `Gemfile` (most GitHub Pages sites do):

```bash
bundle install
```

### 5. Match GitHub Pages environment (important)

GitHub Pages uses a specific setup. To avoid “works locally but not on GitHub” issues, use:

```bash
bundle add github-pages --group jekyll_plugins
```
This ensures your site uses the same versions and plugins as GitHub Pages.

### 6. Run the local server

```bash
bundle exec jekyll serve
```

Jekyll automatically rebuilds when files change. If not, try:

```bash
bundle exec jekyll serve --livereload
```

Then open your browser at:

```
http://localhost:4000
```

<div style="border: 2px solid #ff4c4c; padding: 15px; margin-bottom: 20px; border-radius: 5px; background-color: rgba(255, 76, 76, 0.1);" markdown="1">
### Other Common pitfalls

* Missing dependencies → run `bundle install`
* Port already in use → try `--port 4001`
* Changes not showing → clear cache:

```bash
bundle exec jekyll clean
```
</div>
