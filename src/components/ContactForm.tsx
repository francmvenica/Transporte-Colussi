import { useForm, type SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

interface FormData {
  nombre: string;
  empresa: string;
  telefono: string;
  email: string;
  mensaje: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (_data) => {
    setStatus('sending');
    // Simular envío — integrar con backend real después
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    reset();
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Nombre *
          </label>
          <input
            id="nombre"
            type="text"
            {...register('nombre', { required: 'El nombre es obligatorio' })}
            className={`w-full px-4 py-3 rounded-xl border ${errors.nombre ? 'border-red-400 focus:ring-red-400' : 'border-neutral-300 focus:ring-brand-red'} bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
            placeholder="Tu nombre"
          />
          {errors.nombre && <p className="mt-1 text-sm text-red-500">{errors.nombre.message}</p>}
        </div>

        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Empresa
          </label>
          <input
            id="empresa"
            type="text"
            {...register('empresa')}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
            placeholder="Nombre de la empresa"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Teléfono *
          </label>
          <input
            id="telefono"
            type="tel"
            {...register('telefono', { required: 'El teléfono es obligatorio' })}
            className={`w-full px-4 py-3 rounded-xl border ${errors.telefono ? 'border-red-400 focus:ring-red-400' : 'border-neutral-300 focus:ring-brand-red'} bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
            placeholder="+54 9 ..."
          />
          {errors.telefono && <p className="mt-1 text-sm text-red-500">{errors.telefono.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'El email es obligatorio',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' },
            })}
            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-neutral-300 focus:ring-brand-red'} bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
            placeholder="email@ejemplo.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          rows={4}
          {...register('mensaje', { required: 'El mensaje es obligatorio' })}
          className={`w-full px-4 py-3 rounded-xl border ${errors.mensaje ? 'border-red-400 focus:ring-red-400' : 'border-neutral-300 focus:ring-brand-red'} bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none`}
          placeholder="Contanos qué necesitás transportar..."
        />
        {errors.mensaje && <p className="mt-1 text-sm text-red-500">{errors.mensaje.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-brand-red text-white font-semibold text-lg rounded-xl hover:bg-brand-red-dark disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/25"
      >
        {status === 'sending' ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Enviando...
          </>
        ) : (
          'Enviar Consulta'
        )}
      </button>

      {status === 'success' && (
        <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-xl">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <p className="font-medium">Consulta enviada. Nos comunicamos pronto.</p>
        </div>
      )}
    </form>
  );
}
