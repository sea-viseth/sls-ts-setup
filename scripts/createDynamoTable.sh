 echo "Local ~ Creating Table"
aws dynamodb create-table --endpoint-url http://localhost:8005 \
    --table-name wire-middleware \
    --attribute-definitions \
        AttributeName=PK,AttributeType=S \
        AttributeName=SK,AttributeType=S \
    --key-schema \
        AttributeName=PK,KeyType=HASH \
        AttributeName=SK,KeyType=RANGE \
    --provisioned-throughput \
        ReadCapacityUnits=5,WriteCapacityUnits=5 \
    --table-class STANDARD
echo "Local ~ Finished Table"