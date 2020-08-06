#change-password.sh

curl "http://localhost:4741/change-password/" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
