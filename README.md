# Less Than Bang

---

## Running locally

The `_config.yml` file has the live domain set as its url, so to mae thus run locally you need to start the Jekyll server with this command:

	jekyll --url http://localhost:4001/

Note the `http://` and trailing `/` are needed.

## Episode Structure

The post file name must be `yyyy-mm-dd-[episode_number].md`

And here's the YAML for each file.

	---
	layout: post
	title: Episode 0
	category: episode
	mp3_src: http://get.lessthanbang.com/episode-0.mp3
	mp3_size: 27.4mb
	mp3_length: 42:58
	itunes_tags: new,years,resolutions,goals,code,programming
	image: show_10.png
	---

	Shownotes & stuff, here

Almost every field is required for the iTunes feed to work correctly.

`mp3_length` is in minutes & seconds, with a dot seperating the two (using a colon causes issues)

`image` in YAML is **optional**. It should be placed in the /assets/img/ folder and be 1400x1400px as a `.png`, `.jpg` or `.jpeg` to comply with iTunes RSS spec. If not supplied, the default show artwork will be used.

## RSS Spec

Can be seen here. [http://www.apple.com/itunes/podcasts/specs.html](http://www.apple.com/itunes/podcasts/specs.html). It's a bitch.