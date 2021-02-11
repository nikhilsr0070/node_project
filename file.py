
import sys, json
import simplejson
full_def = simplejson.load(sys.stdin)
definition = full_def['taskDefinition']['containerDefinitions']
definition[0]['image'] = '$REPOSITORY_URI:$TAG'
print(json.dumps(definition))
  
