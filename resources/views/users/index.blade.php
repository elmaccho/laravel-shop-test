@extends('layouts.app')

@section('content')
    <div class="container">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Imię</th>
                <th scope="col">Nazwisko</th>
                <th scope="col">Numer telefonu</th>
                <th scope="col">Akcje</th>
            </tr>
            </thead>
            <tbody>
                @foreach ($users as $user)
                    <tr>
                        <th scope="row">{{ $user->id }}</th>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->surname }}</td>
                        <td>{{ $user->phone_number }}</td>
                        <td>
                            <button class="btn btn-danger btn-sm delete" data-id="{{ $user->id }}">
                                x
                            </button>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        {{ $users->links() }}
    </div>
@endsection

@section('javascript')
@endsection
@section('js-files')
    @vite('resources/js/delete.js');
@endsection