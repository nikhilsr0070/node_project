import sys, json
with open("file://taskdef.json") as contactFile:
    full_def = json.load(contactFile)
definition = full_def['taskDefinition']['containerDefinitions']
definition[0]['image'] = '$REPOSITORY_URI:$TAG'
print(json.dumps(definition))
