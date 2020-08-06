# sign-out.sh

curl "http://localhost:4741/sign-out/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \

echo
