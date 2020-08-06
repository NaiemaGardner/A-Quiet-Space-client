# sign-up.sh

curl "http://localhost:4741/sign-up" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "name": "'"${NAME}"'",
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
