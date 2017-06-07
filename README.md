# FxPotatoWeb

Deployed to Heroku [here](https://fxpotatoweb.herokuapp.com/).

Demonstrating the Foreign Exchange currency rates looker-upper. Potato style.

Uses last daily feed from [European Central Bank](http://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist-90d.xml), and exposes a simple interface to get the conversion rates for one currency to another on a given day.

Source code for the gem is [here](https://github.com/Angry-Potato/fxpotato).

[Available on RubyGems.org](https://rubygems.org/gems/fxpotato)

[And on DockerHub](https://hub.docker.com/r/angrypotato/fx-potato/)

## Running the site

Setup the site like any rails app, with a strong `bundle install`, and a `npm install` for good measure.

From there it should be a simple `bundle exec rails s` to get the app up and running locally.

## Docker!
If you have docker and docker-compose installed, you still have to run the setup commands, but then a meagre `rake docker_run` will start the app up in a container with a postgres container buddy which it completely ignores.
