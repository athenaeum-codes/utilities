# athenaeum-utilities
These are the utilities used for project management
Currently:  
    reference (ref) cli to create new components  
        Usage: `ref -c component-name` or `ref --component component-name`  
        Creates a new component with structure:  
        src/components/component-name/  
        -- index.tsx  
        -- componentName.tsx  
        -- componentName.scss  
        Usage `ref -m model-name` or `ref --model model-name`  
        Creates a new model with structure:
        src/models/  
        -- modelName.model.ts