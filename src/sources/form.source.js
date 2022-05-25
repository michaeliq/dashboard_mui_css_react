export const userForm = {
    title: "Añadir nuevo Usuario",
    fields: [
        {
            class: "new-input fullWidth",
            label: "Correo",
            size: "small",
            variant: "standard",
            margin: "dense",
            type: "email",
            isSelect: false,
        },
        {
            class: "new-input fullWidth",
            label: "Contraseña",
            size: "small",
            variant: "standard",
            margin: "dense",
            type: "password",
            isSelect: false,
        },
        {
            class: "new-input fullWidth",
            label: "Confirmar Contraseña",
            size: "small",
            variant: "standard",
            margin: "dense",
            type: "password",
            isSelect: false,
        },
        {
            class: "new-input fullWidth",
            label: "Teléfono",
            size: "small",
            variant: "standard",
            margin: "dense",
            type: "number",
            isSelect: false,
        },
        {
            class: "new-input fullWidth",
            label: "Dirección",
            size: "small",
            variant: "standard",
            margin: "dense",
            type: "text",
            isSelect: false,
        },
    ],
    actionBtn: [{
        color: "primary",
        label: "CREAR",
        style: "outlined"
    },
    {
        color: "warning",
        label: "LIMPIAR",
        style: "outlineds"
    }
    ]
}

export const productForm = {
    title: "Añadir nuevo Producto",
    fields: [
        {
            class: "new-input fullWidth",
            label: "Nombre de Producto",
            size: "small",
            variant: "standard",
            margin: "dense",
            type: "text"
        },
        {
            class: "new-input fullWidth",
            label: "Precio",
            size: "small",
            variant: "standard",
            margin: "dense",
            type: "number"
        },
        {
            class: "new-input fullWidth",
            label: "Cantidad en Stock",
            size: "small",
            variant: "standard",
            margin: "dense",
            type: "number"
        },
        {
            class: "new-input fullWidth",
            label: "Cod",
            size: "small",
            variant: "standard",
            margin: "dense",
            type: "text"
        },
        {
            class: "new-input fullWidth",
            label: "Por Suscripción",
            size: "small",
            variant: "standard",
            margin: "dense",
            type: "select",
            isSelect: true,
            selectData: [
                {
                    label: "Si",
                    value: true,
                },
                {
                    label:"No",
                    value:false
                }
            ]
        },
        {
            class: "new-input fullWidth",
            label: "Unidad de Medida",
            size: "small",
            variant: "standard",
            margin: "dense",
            type: "select",
            isSelect: true,
            selectData: [
                {
                    label: "MTS",
                    value: "metros",
                },
                {
                    label:"UND",
                    value:"unidad"
                }
            ]
        },
        {
            class: "new-input fullWidth",
            label: "Tipo de Producto",
            size: "small",
            variant: "standard",
            margin: "dense",
            type: "text"
        },
    ],
    actionBtn: [{
        color: "primary",
        label: "CREAR",
        style: "outlined"
    },
    {
        color: "warning",
        label: "LIMPIAR",
        style: "outlineds"
    }
    ]
}