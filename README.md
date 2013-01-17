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
	---

	Shownotes & stuff, here


`mp3_length` is in minutes & seconds, with a dot seperating the two (using a colon causes issues)