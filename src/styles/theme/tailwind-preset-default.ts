module.exports = {
    theme: {
        colors: {
            primary: 'rgb(var(--primary-color-tailwindcss) / <alpha-value>)',
            'primary-hover': 'rgb(var(--primary-color-hover-tailwindcss) / <alpha-value>)',
            'primary-active': 'rgb(var(--primary-color-active-tailwindcss) / <alpha-value>)',
            'primary-disable': 'rgb(var(--primary-color-disable-tailwindcss) / <alpha-value>)',
            success: 'rgb(var(--success-color-tailwindcss) / <alpha-value>)',
            'success-hover': 'rgb(var(--success-color-hover-tailwindcss) / <alpha-value>)',
            'success-active': 'rgb(var(--success-color-active-tailwindcss) / <alpha-value>)',
            'success-disable': 'rgb(var(--success-color-disable-tailwindcss) / <alpha-value>)',
            alarm: 'rgb(var(--alarm-color-tailwindcss) / <alpha-value>)',
            'alarm-hover': 'rgb(var(--alarm-color-hover-tailwindcss) / <alpha-value>)',
            'alarm-active': 'rgb(var(--alarm-color-active-tailwindcss) / <alpha-value>)',
            'alarm-disable': 'rgb(var(--alarm-color-disable-tailwindcss) / <alpha-value>)',
            warning: 'rgb(var(--warning-color-tailwindcss) / <alpha-value>)',
            'warning-hover': 'rgb(var(--warning-color-hover-tailwindcss) / <alpha-value>)',
            'warning-active': 'rgb(var(--warning-color-active-tailwindcss) / <alpha-value>)',
            'warning-disable': 'rgb(var(--warning-color-disable-tailwindcss) / <alpha-value>)',
            error: 'rgb(var(--error-color-tailwindcss) / <alpha-value>)',
            'error-hover': 'rgb(var(--error-color-hover-tailwindcss) / <alpha-value>)',
            'error-active': 'rgb(var(--error-color-active-tailwindcss) / <alpha-value>)',
            'error-disable': 'rgb(var(--error-color-disable-tailwindcss) / <alpha-value>)',
            info: 'rgb(var(--info-color-tailwindcss) / <alpha-value>)',
            'info-hover': 'rgb(var(--info-color-hover-tailwindcss) / <alpha-value>)',
            'info-active': 'rgb(var(--info-color-active-tailwindcss) / <alpha-value>)',
            'info-disable': 'rgb(var(--info-color-disable-tailwindcss) / <alpha-value>)',
            'transparent': '#00000000',
            white: 'rgb(var(--white-color-tailwindcss) / <alpha-value>)'
        },
        extend: {
            textColor: {
                title: 'var(--title-color)',
                default: 'var(--text-color)',
                secondary: 'var(--text-color-secondary)',
                disabled: 'var(--disabled-color)',
            },
            borderColor: {
                default: 'var(--border-color-base)',
                split: 'var(--border-color-split)',
                tip: 'var(--border-color-tip)',
                disable: 'var(--border-color-disable)',
            },
            backgroundColor: {
                body: 'var(--bg-body)'
            }
        },
    }
}