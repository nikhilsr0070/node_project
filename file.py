echo "${"output"}"| python <(cat <<-EOF
import sys, json
full_def = json.load(sys.stdin)
definition = full_def['taskDefinition']['containerDefinitions']
definition[0]['image'] = '$REPOSITORY_URI:$TAG'
print(json.dumps(definition))
EOF
  )
