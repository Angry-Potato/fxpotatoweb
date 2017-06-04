FROM ruby:2.3.3
RUN apt-get update -qq && apt-get install -y postgresql build-essential libpq-dev nodejs
RUN mkdir /fxpotatoweb
WORKDIR /fxpotatoweb
COPY waitfordb.sh /fxpotatoweb/
ADD Gemfile /fxpotatoweb/Gemfile
ADD Gemfile.lock /fxpotatoweb/Gemfile.lock
RUN bundle install
ADD . /fxpotatoweb
