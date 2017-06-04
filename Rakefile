# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

desc "Run tests in a container, with a postgres container test db"
task :docker_test do
  sh %{ docker-compose -f docker-compose-test.yml down && docker-compose -f docker-compose-test.yml build --force-rm && docker-compose -f docker-compose-test.yml run --rm test }
end
