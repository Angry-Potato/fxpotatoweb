while ! psql -h db -U postgres postgres -c 'select 1'; do
  echo "waiting for database"
  sleep 1
done
