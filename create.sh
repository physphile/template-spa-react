while getopts n:l flag
do
    case "${flag}" in
        n) name=${OPTARG};;
        l) lib=true;;
    esac
done

if $lib ; then
    cd src/components/lib 
else
    cd src/components/
fi

if [ -d $name ] ; then
echo "Component $name already exists"
exit 2
fi

mkdir $name
cd $name

touch "$name.module.css"

touch "$name.tsx"
react_template="import styles from './$name.module.css';\n\nexport const $name: React.FC = () => {\n\treturn <div></div>;\n};"
echo -e $react_template > "$name.tsx"

code "$name.tsx"
